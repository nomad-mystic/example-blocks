export type CardTypes = {
	url?: string;
	id?: number;
	alt?: string;
};

export type CardAttributes = {
	title: string;
	body: string;
	url: string;
	alt: string;
};

export type CardParams = {
	attributes: CardAttributes;
	setAttributes: ({}: Record<string, any>) => void;
};
