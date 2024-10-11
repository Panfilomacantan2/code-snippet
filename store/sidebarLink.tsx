import { create } from 'zustand';

type SidebarLinksState = {
	activeLink: string;
	setActiveLink: (link: string) => void;
};

export const useSnippetStore = create<SidebarLinksState>((set) => ({
	activeLink: 'All Snippets',
	setActiveLink: (link: string) => set({ activeLink: link }),
}));
