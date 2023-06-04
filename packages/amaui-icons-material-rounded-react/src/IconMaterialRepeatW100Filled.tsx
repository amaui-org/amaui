import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRepeatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatW100Filled'

      short_name='Repeat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.4 17.4v-3.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.225v3.625q0 .325-.212.538-.213.212-.538.212H5.5l2 2q.125.125.125.25t-.125.25q-.125.125-.25.125t-.225-.1l-2.35-2.35q-.225-.225-.225-.525 0-.3.225-.525L7 14.9q.125-.125.25-.125t.25.125q.1.1.113.237.012.138-.088.238L5.5 17.4ZM6.6 6.6v3.65q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.225V6.65q0-.325.213-.538.212-.212.537-.212H18.5l-2-2q-.125-.125-.125-.25t.125-.25q.1-.1.238-.113.137-.012.237.088l2.35 2.35q.225.225.225.525 0 .3-.225.525L17 9.1q-.125.125-.25.125T16.5 9.1q-.125-.125-.125-.25t.1-.225L18.5 6.6Z"/>
    </Icon>
  );
});

IconMaterialRepeatW100Filled.displayName = 'AmauiIconMaterialRepeatW100Filled';

export default IconMaterialRepeatW100Filled;
