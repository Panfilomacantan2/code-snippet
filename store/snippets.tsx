import { create } from 'zustand';

type SnippetsState = {
	data: string[];
	addSnippet: (snippet: string) => void;
};

export const useSnippetStore = create<SnippetsState>((set) => ({
	data: [],
	addSnippet: (snippet: string) => set((state) => ({ data: [...state.data, snippet] })),
}));
