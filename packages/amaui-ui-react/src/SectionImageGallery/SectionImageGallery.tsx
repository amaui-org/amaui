import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import ImageGalleryElement from '../ImageGallery';
import SectionElement, { ISection } from '../Section/Section';
import { IImageGallery } from '../ImageGallery/ImageGallery';
import { staticClassName } from '../utils';
import { IMediaObject } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'amaui-SectionImageGallery' });

export interface ISectionImageGallery extends ISection {
  values?: IMediaObject[];

  value?: number;

  ImageGalleryProps?: IImageGallery;
}

const Element: React.FC<ISectionImageGallery> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSectionImageGallery?.props?.default, ...props_ }), [props_]);

  const Section = React.useMemo(() => theme?.elements?.Section || SectionElement, [theme]);

  const ImageGallery = React.useMemo(() => theme?.elements?.ImageGallery || ImageGalleryElement, [theme]);

  const {
    values,

    value,

    ImageGalleryProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>()
  };

  return (
    <Section
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      className={classNames([
        staticClassName('ImageGallery', theme) && [
          'amaui-SectionImageGallery-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {!!values?.length && (
        <ImageGallery
          version='regular'

          items={values}

          value={value}

          {...ImageGalleryProps}
        />
      )}
    </Section>
  );
});

Element.displayName = 'amaui-SectionImageGallery';

export default Element;
