import { useEffect, useRef } from 'react';

export default function AngularRemote({ basename }: { basename: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false
    let unmount: (() => void) | undefined

    async function loadAngular() {
      const { mount } = await import('remoteAng/remote-app-ang')

      if (cancelled || !containerRef.current) return

      // Angular bootstraps asynchronously, so re-check: the effect may have
      // been torn down while the app was still starting up.
      const teardown = await mount(containerRef.current, basename)

      if (cancelled) {
        teardown()
        return
      }

      unmount = teardown
    }

    loadAngular()

    return () => {
      cancelled = true
      unmount?.()
    }
  }, [basename])

  return <div ref={containerRef} />
}
