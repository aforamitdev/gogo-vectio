import { AppSidebar } from "../navigations/AppSideBar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb"
import { Separator } from "@radix-ui/react-separator"

type Props = {
	children: React.ReactNode
}

const AppContainer = (props: Props) => {
	return (
		<SidebarProvider>
			<AppSidebar variant="inset" />

			<SidebarInset className="rounded-sm!">

				<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
					<div className="flex items-center gap-2 px-4">
						<SidebarTrigger className="-ml-1" />
						<Separator orientation="vertical" className="mr-2 h-4" />
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem className="hidden md:block">
									<BreadcrumbLink href="#">Dashboard </BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator className="hidden md:block" />
								<BreadcrumbItem>
									<BreadcrumbPage>Go Go Vertico</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>
				</header>
				<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
					{props.children}
				</div>
			</SidebarInset>
		</SidebarProvider>
	)
}

export default AppContainer