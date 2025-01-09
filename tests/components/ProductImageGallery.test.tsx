import { render, screen } from '@testing-library/react';
import ProductImageGallery from '../../src/components/ProductImageGallery';

describe('ProductImageGallery', () => {
    it('should not render the gallery when images is empty', () => {
        render(<ProductImageGallery imageUrls={[]} />);
        const gallery = screen.queryByRole('list');
        expect(gallery).not.toBeInTheDocument();
    });

    it('should render the gallery of images', () => {
        const imageUrls = [
            'https://example.com/image1.jpg',
            'https://example.com/image2.jpg',
        ];
        render(<ProductImageGallery imageUrls={imageUrls} />);
        const images = screen.getAllByRole('img');
        imageUrls.forEach((url, index) => {
            expect(images[index]).toHaveAttribute('src', url);
        });
    });
});