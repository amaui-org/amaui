import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackspace = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Backspace'

      short_name='Backspace'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.7 15.3q.275.275.7.275.425 0 .7-.275l1.9-1.9 1.9 1.9q.275.275.7.275.425 0 .7-.275.275-.275.275-.7 0-.425-.275-.7L15.4 12l1.9-1.9q.275-.275.275-.7 0-.425-.275-.7-.275-.275-.7-.275-.425 0-.7.275L14 10.6l-1.9-1.9q-.275-.275-.7-.275-.425 0-.7.275-.275.275-.275.7 0 .425.275.7l1.9 1.9-1.9 1.9q-.275.275-.275.7 0 .425.275.7ZM9 19q-.5 0-.938-.225-.437-.225-.712-.625l-3.525-5q-.35-.525-.35-1.15 0-.625.35-1.15l3.525-5q.275-.4.712-.625Q8.5 5 9 5h10q.825 0 1.413.588Q21 6.175 21 7v10q0 .825-.587 1.413Q19.825 19 19 19Zm-3.55-7L9 17h10V7H9ZM19 12V7v10Z"/>
    </Icon>
  );
});

IconMaterialBackspace.displayName = 'AmauiIconMaterialBackspace';

export default IconMaterialBackspace;
