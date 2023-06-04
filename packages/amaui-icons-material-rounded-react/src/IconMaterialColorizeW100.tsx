import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialColorizeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ColorizeW100'

      short_name='Colorize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.2 19.7q-.325 0-.538-.213-.212-.212-.212-.537V17.1q0-.15.05-.275.05-.125.175-.25L13 8.25l-1.65-1.6q-.125-.1-.125-.238 0-.137.125-.262.1-.1.238-.1.137 0 .262.1L14 8.25l3.5-3.5q.15-.15.375-.15t.375.15L19.4 5.9q.15.15.15.375t-.15.375l-3.55 3.55L18 12.35q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125l-1.65-1.65-8.275 8.275q-.125.125-.25.175-.125.05-.275.05Zm-.05-.7H7.1l8.3-8.35-1.9-1.9-8.35 8.3ZM15.4 9.65l3.375-3.375-.9-.9L14.5 8.75Zm0 0-.9-.9.9.9Z"/>
    </Icon>
  );
});

IconMaterialColorizeW100.displayName = 'AmauiIconMaterialColorizeW100';

export default IconMaterialColorizeW100;
