interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  title: string;
  description: string;
  image: Image;
}

export interface Social extends SanityBody {
  _type: "social";
  name: string;
  title: string;
  url: string;
}

export interface Person extends SanityBody {
  _type: "person";
  name: string;
  slug: [
    {
      _type: "slug";
      current: string;
      source: string;
    }
  ];
  image: Image;
}
