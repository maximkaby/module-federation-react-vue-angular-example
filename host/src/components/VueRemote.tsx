import { useEffect, useRef } from 'react';

export default function VueRemote({ basename }: { basename: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false
    let unmount: (() => void) | undefined

    async function loadVue() {
      const { mount } = await import('remoteVue/remote-app-vue')

      // The effect can be torn down before the remote resolves (StrictMode
      // mounts twice), so bail out instead of leaking a mounted Vue app.
      if (cancelled || !containerRef.current) return

      unmount = mount(containerRef.current, basename)
    }

    loadVue()

    return () => {
      cancelled = true
      unmount?.()
    }
  }, [basename])

  return <div ref={containerRef} />
}
