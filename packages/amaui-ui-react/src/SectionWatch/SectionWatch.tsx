import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Section, { ISection } from '../Section/Section';
import Watch from '../Watch';
import { IWatch } from '../Watch/Watch';
import { TSize, staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'amaui-SectionWatch' });

export interface ISectionWatch extends ISection {
  version?: 'regular' | 'analog' | 'modern' | 'minimal';

  size?: TSize;

  WatchProps?: IWatch;
}

const Element: React.FC<ISectionWatch> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSectionWatch?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    version = 'modern',

    size = 'regular',

    className,

    ...other
  } = props;

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
          'amaui-SectionWatch-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Watch
        version={version}

        size={size}
      />
    </Section>
  );
});

Element.displayName = 'amaui-SectionWatch';

export default Element;
