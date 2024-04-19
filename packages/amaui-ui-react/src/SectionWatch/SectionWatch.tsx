import React from 'react';

import { is } from '@amaui/utils';
import { TPaletteVersion, classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import SectionElement, { ISection } from '../Section/Section';
import WatchElement from '../Watch';
import { IWatch } from '../Watch/Watch';
import { staticClassName } from '../utils';
import { ISize } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'amaui-SectionWatch' });

export interface ISectionWatch extends ISection {
  tonal?: boolean;

  version?: 'regular' | 'analog' | 'modern' | 'minimal';

  size?: ISize;

  color?: TPaletteVersion;

  WatchProps?: IWatch;
}

const Element: React.FC<ISectionWatch> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSectionWatch?.props?.default, ...props_ }), [props_]);

  const Section = React.useMemo(() => theme?.elements?.Section || SectionElement, [theme]);

  const Watch = React.useMemo(() => theme?.elements?.Watch || WatchElement, [theme]);

  const {
    version = 'modern',
    size = 'regular',

    WatchProps,

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

      padding='small'

      align='center'

      className={classNames([
        staticClassName('SectionWatch', theme) && [
          'amaui-SectionWatch-root',
          `amaui-SectionWatch-version-${version}`,
          `amaui-SectionWatch-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Watch
        version={version}

        size={size}

        {...WatchProps}
      />
    </Section>
  );
});

Element.displayName = 'amaui-SectionWatch';

export default Element;
