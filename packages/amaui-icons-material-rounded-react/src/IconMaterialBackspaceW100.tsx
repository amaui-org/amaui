import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackspaceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackspaceW100'

      short_name='Backspace'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.7 14.85q.125.125.25.125t.25-.125l2.35-2.35 2.35 2.35q.125.125.25.125t.25-.125q.125-.125.125-.25t-.125-.25L14.05 12l2.35-2.35q.125-.125.125-.25t-.125-.25q-.125-.125-.25-.125t-.25.125l-2.35 2.35-2.35-2.35q-.125-.125-.25-.125t-.25.125q-.125.125-.125.25t.125.25L13.05 12l-2.35 2.35q-.125.125-.125.25t.125.25ZM9.65 17.7q-.575 0-1.037-.275-.463-.275-.813-.725l-2.725-3.825Q4.8 12.475 4.8 12t.275-.875L7.8 7.25q.325-.45.813-.7Q9.1 6.3 9.65 6.3h8.4q.625 0 1.063.438.437.437.437 1.062v8.4q0 .625-.437 1.062-.438.438-1.063.438ZM5.3 12l3.1 4.35q.2.275.538.462.337.188.712.188h8.4q.3 0 .55-.25.25-.25.25-.55V7.8q0-.3-.25-.55-.25-.25-.55-.25h-8.4q-.375 0-.712.188-.338.187-.538.462Zm13.55 0V7 17v-.65Z"/>
    </Icon>
  );
});

IconMaterialBackspaceW100.displayName = 'AmauiIconMaterialBackspaceW100';

export default IconMaterialBackspaceW100;
