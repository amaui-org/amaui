import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoneAll = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneAll'

      short_name='DoneAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.7 17.6q-.2 0-.375-.075T6 17.3l-4.225-4.225Q1.5 12.8 1.5 12.362q0-.437.275-.712.275-.275.7-.275.425 0 .7.275l3.55 3.55 1.4 1.4-.725.7q-.15.15-.325.225-.175.075-.375.075Zm5.65-.025q-.2 0-.375-.063-.175-.062-.325-.212L7.4 13.05q-.275-.275-.275-.713 0-.437.275-.712.275-.275.7-.275.425 0 .7.275l3.55 3.55 8.5-8.5q.275-.275.7-.275.425 0 .7.275.275.275.275.712 0 .438-.275.713l-9.2 9.2q-.15.15-.325.212-.175.063-.375.063Zm0-5.225-1.425-1.4 4.25-4.25q.275-.275.712-.275.438 0 .713.275.275.275.275.7 0 .425-.275.7Z"/>
    </Icon>
  );
});

IconMaterialDoneAll.displayName = 'AmauiIconMaterialDoneAll';

export default IconMaterialDoneAll;
