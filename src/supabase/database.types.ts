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
