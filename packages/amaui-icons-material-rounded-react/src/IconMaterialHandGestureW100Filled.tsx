import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHandGestureW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandGestureW100Filled'

      short_name='HandGesture'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6 9.5-.925-1.875L3.2 6.7l1.875-.925L6 3.9l.925 1.875L8.8 6.7l-1.875.925Zm11.6 10.1-1.05-2.15-2.15-1.05 2.15-1.05 1.05-2.15 1.05 2.15 2.15 1.05-2.15 1.05Zm-5.25.15q-.65 0-1.225-.262-.575-.263-1-.763L6.05 14l.9-.9q.35-.35.825-.4.475-.05.875.225l1.7 1.15V7.2q0-.575.388-.963.387-.387.962-.387.2 0 .35.037.15.038.3.113v-.4q0-.575.388-.963.387-.387.962-.387.475 0 .813.275.337.275.512.7.15-.075.313-.125.162-.05.362-.05.575 0 .963.388.387.387.387.962v.425q.15-.075.3-.125t.35-.05q.575 0 .963.387.387.388.387.963v2.55h-.7V8q0-.275-.187-.463-.188-.187-.463-.187t-.462.187q-.188.188-.188.463v3.75h-.7V6.4q0-.275-.187-.462-.188-.188-.463-.188t-.462.188q-.188.187-.188.462v5.35h-.7V5.6q0-.275-.187-.463-.188-.187-.463-.187t-.462.187q-.188.188-.188.463v6.15h-.7V7.175q0-.275-.187-.45-.188-.175-.463-.175t-.462.188q-.188.187-.188.462v8.2l-2.8-1.875q-.2-.125-.412-.113-.213.013-.388.188l-.45.45 3.675 4.225q.325.375.75.575.425.2.925.2h2.775l.35.7Z"/>
    </Icon>
  );
});

IconMaterialHandGestureW100Filled.displayName = 'AmauiIconMaterialHandGestureW100Filled';

export default IconMaterialHandGestureW100Filled;
