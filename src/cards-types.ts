export type CardsAttributes = {
	columns?: number;
};

export type CardsParams = {
	attributes: CardsAttributes;
	setAttributes: ({}: Record<string, any>) => void;
};
