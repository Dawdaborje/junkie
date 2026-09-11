<script lang="ts">
	import FolderIcon from '@tabler/icons-svelte/icons/folder';
	import CameraIcon from '@tabler/icons-svelte/icons/camera';
	import DashboardIcon from '@tabler/icons-svelte/icons/dashboard';
	import DatabaseIcon from '@tabler/icons-svelte/icons/database';
	import FileAiIcon from '@tabler/icons-svelte/icons/file-ai';
	import FileDescriptionIcon from '@tabler/icons-svelte/icons/file-description';
	import FileWordIcon from '@tabler/icons-svelte/icons/file-word';
	import HelpIcon from '@tabler/icons-svelte/icons/help';
	import InnerShadowTopIcon from '@tabler/icons-svelte/icons/inner-shadow-top';
	import ReportIcon from '@tabler/icons-svelte/icons/report';
	import SearchIcon from '@tabler/icons-svelte/icons/search';
	import SettingsIcon from '@tabler/icons-svelte/icons/settings';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import NavDocuments from './nav-documents.svelte';
	import NavMain from './nav-main.svelte';
	import NavSecondary from './nav-secondary.svelte';
	import type { ComponentProps } from 'svelte';
	import { resolve } from '$app/paths';

	const data = {
		navMain: [
			{
				title: 'Dashboard',
				url: '/',
				icon: DashboardIcon
			},
			{
				title: 'All Projects',
				url: '/projects',
				icon: FolderIcon
			}
		],
		navClouds: [
			{
				title: 'Capture',
				icon: CameraIcon,
				isActive: true,
				url: '#',
				items: [
					{
						title: 'Active Proposals',
						url: '#'
					},
					{
						title: 'Archived',
						url: '#'
					}
				]
			},
			{
				title: 'Proposal',
				icon: FileDescriptionIcon,
				url: '#',
				items: [
					{
						title: 'Active Proposals',
						url: '#'
					},
					{
						title: 'Archived',
						url: '#'
					}
				]
			},
			{
				title: 'Prompts',
				icon: FileAiIcon,
				url: '#',
				items: [
					{
						title: 'Active Proposals',
						url: '#'
					},
					{
						title: 'Archived',
						url: '#'
					}
				]
			}
		],
		navSecondary: [
			{
				title: 'Settings',
				url: '#',
				icon: SettingsIcon
			},
			{
				title: 'Get Help',
				url: '#',
				icon: HelpIcon
			},
			{
				title: 'Search',
				url: '#',
				icon: SearchIcon
			}
		],
		documents: [
			{
				name: 'Data Library',
				url: '#',
				icon: DatabaseIcon
			},
			{
				name: 'Reports',
				url: '#',
				icon: ReportIcon
			},
			{
				name: 'Word Assistant',
				url: '#',
				icon: FileWordIcon
			}
		]
	};

	let { ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root collapsible="offcanvas" {...restProps}>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<a href={resolve('/')} class="flex items-center gap-2">
					<InnerShadowTopIcon class="size-5!" />
					<span class="text-base font-semibold">Junkie.</span>
				</a>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		<NavMain items={data.navMain} />
		<NavDocuments items={data.documents} />
		<NavSecondary items={data.navSecondary} class="mt-auto" />
	</Sidebar.Content>
	<Sidebar.Footer></Sidebar.Footer>
</Sidebar.Root>
