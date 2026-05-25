const TARGET_FILES = [
  'global/ui/layouts/loadscreenpanelhd.json',
  'global/ui/layouts/loadscreenpanel.json'
]

const PANEL_DATA = {
  type: 'TitleScreenHDPanel',
  name: 'LoadScreenPanel',
  fields: { fitToParent: true }
}

function install() {
  for (const filePath of TARGET_FILES) {
    D2RMM.writeJson(filePath, PANEL_DATA)
  }
}

install()
