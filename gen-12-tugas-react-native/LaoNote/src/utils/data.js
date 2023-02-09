let notes = [
  {
    "id": 1,
    "title": "Babel",
    "body": "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    "createdAt": "2023-01-23T06:17:57.013Z",
    "color": '#F2F7FF',
    "label": ['Programming', 'Bundler']
  },
  {
    "id": 2,
    "title": "Functional Component",
    "body": "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
    "createdAt": "2023-01-28T06:17:57.013Z",
    "color": "#FEF6E5",
    "label": ['Programming', 'React']
  },
  {
    "id": 3,
    "title": "Modularization",
    "body": "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
    "createdAt": "2023-01-23T06:17:57.013Z",
    "color": "#E4FEE6",
    "label": ['Programming']
  },
  {
    "id": 4,
    "title": "Lifecycle",
    "body": "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
    "createdAt": "2023-01-23T06:17:57.013Z",
    "color": "#FEF6E5",
    "label": ['Programming']
  },
  {
    "id": 5,
    "title": "ESM",
    "body": "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
    "createdAt": "2023-01-23T06:17:57.013Z",
    "color": "#E4FEE6",
    "label": ['Programming']
  },
  {
    "title": "How to make a pancake ",
    "body": "this is how to make a pancake",
    "createdAt": "2023-01-23T08:34:01.942Z",
    "label": ['Programming', 'Cooking'],
    "color": "#E4FEE6",
    "id": 7
  }
]

let categories = [
  'Programming', 
  'Design',
  'Scientific',
  'Cooking',
  'React',
  'Bundler',
  // 'Design'
]

let colors = {
  yellow: ['#FFC546', '#FEF9ED'],
  blue: ['#428BFA', '#F6FAFF'],
  green: ['#53D25D', '#ECFEEE'],
  pink: ['#E86AFE', '#FBE8FF']
}

let colorMappings = {
  'Programming': colors.yellow, 
  'Design': colors.green,
  'Scientific': colors.blue,
  'Cooking': colors.green,
  'React': colors.pink,
  'Bundler': colors.yellow
}

const getAllNotes = () => {
  return notes
}

const addNote = ({title, body, label}) => {
  const id = new Date().toTimeString()
  const createdAt = new Date().toISOString()
  const color = getColorMapping(label[0])[1]
  notes = [...notes, {
    id, title, body, createdAt, label, color
  }]
}

const getNotesByCategory = (category) => {
  return notes.filter((note) => note.label.includes(category))
}

const getAllCategories = () => {
  return categories
}

const addCategory = ({category, color}) => {
  categories.push(category)
  colorMappings[category] = colors[color]
}

const getColorMapping = (category) => {
  return colorMappings[category]
}

const getAllColors = () => {
  return colors
}

export {
  getAllNotes,
  addNote,
  getNotesByCategory,
  getAllCategories,
  getColorMapping,
  getAllColors,
  addCategory
}