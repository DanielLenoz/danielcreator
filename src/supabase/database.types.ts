export interface DataType {
  id: number
  createdAt?: string // Optional for flexibility
  title: string
  category?: string
  hastag?: string[] // Optional for flexibility
  content?: string // Optional for flexibility (might not be present in Certificates)
  img?: Img // Optional for flexibility (might not be present in Certificates)
  imgFrameworks?: ImgFramework[] // Specific to Projects
  links?: Links // Specific to Projects
  certificateImgs?: Img[] // Specific to Certificates (renamed for clarity)
  description?: string // Specific to Blogs
}

export interface Img {
  small: string
  full: string
}

export interface ImgFramework {
  img: string
}

export interface Links {
  github: string
  website: string
}

//--------------- interface de Projects
// export interface Projects {
//   id: number
//   createdAt: string
//   title: string
//   hastag: string
//   content: string
//   imgFrameworks: ImgFramework[]
//   links: Links
//   img: Img
// }

// export interface Img {
//   small: string
//   full: string
// }

// export interface ImgFramework {
//   react?: string
//   js?: string
//   css?: string
//   git?: string
// }

// export interface Links {
//   github: string
//   website: string
// }
//---------------- interface de Certificates
// export interface Certificates {
//   id: number
//   title: string
//   img: Img[]
// }

// export interface Img {
//   img: string
//   alt: string
// }

//----------interface de Blogs
// export interface Blogs {
//   id: number
//   createdAt: string
//   title: string
//   hastag: string
//   description: string
//   content: string
//   img: Img
// }

// export interface Img {
//   small: string
//   full: string
// }
