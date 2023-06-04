import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContentPasteOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPasteOffW100Filled'

      short_name='ContentPasteOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.125.012-.225.013-.1.063-.2L3.4 4.4q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l16.2 16.2q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125l-.975-.975q-.1.05-.2.063-.1.012-.225.012Zm0-.7H18L5 6v12.2q0 .3.25.55.25.25.55.25Zm13.9-2.1-.7-.7V5.8q0-.3-.25-.55Q18.5 5 18.2 5h-2.5v.5q0 .625-.437 1.062Q14.825 7 14.2 7H9.8L7.1 4.3h3.475q.1-.5.487-.85.388-.35.938-.35.55 0 .938.35.387.35.487.85H18.2q.625 0 1.063.437.437.438.437 1.063ZM12 5.3q.325 0 .538-.212.212-.213.212-.538 0-.325-.212-.538Q12.325 3.8 12 3.8q-.325 0-.537.212-.213.213-.213.538 0 .325.213.538.212.212.537.212Z"/>
    </Icon>
  );
});

IconMaterialContentPasteOffW100Filled.displayName = 'AmauiIconMaterialContentPasteOffW100Filled';

export default IconMaterialContentPasteOffW100Filled;
