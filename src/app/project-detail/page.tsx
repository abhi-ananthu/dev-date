import ClientDetail from "@/components/ClientDetail"
import CommonFooter from "@/components/CommonFooter"
import ProjectDetail from "@/components/ProjectDetail"
import ProjectHeader from "@/components/ProjectHeader"

const page = () => {
  return (
    <>
      <ProjectHeader />
      <ProjectDetail />
      <ClientDetail />
      <CommonFooter />
    </>
  )
}

export default page
