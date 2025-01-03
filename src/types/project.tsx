export interface Project {
    id: number;
    title: string;
    category: string;
    imageUrl: string;
  }
  
  export const projectData: Project[] = [
    {
      id: 1,
      title: "Jardin Botanique",
      category: "Porcherie",
      imageUrl: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Culture Florale",
      category: "Poulailler",
      imageUrl: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Plantes d'Intérieur",
      category: "Maraîchère",
      imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Agriculture Durable",
      category: "Cassava",
      imageUrl: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    // Ajoutez plus de projets selon vos besoins
  ];