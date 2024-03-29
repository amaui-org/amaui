import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransformFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransformFilled'

      short_name='Transform'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 22.575q-.2 0-.375-.063-.175-.062-.325-.212l-2.6-2.6q-.3-.3-.3-.713 0-.412.3-.712t.713-.3q.412 0 .712.3l.875.875V17H9q-.825 0-1.412-.587Q7 15.825 7 15V9H2.975q-.425 0-.7-.288Q2 8.425 2 8t.288-.713Q2.575 7 3 7h4V4.85l-.9.9q-.275.275-.688.275-.412 0-.712-.3T4.412 5q.013-.425.313-.725L7.3 1.7q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l2.6 2.6q.3.3.3.712 0 .413-.3.713t-.712.3q-.413 0-.713-.3L9 4.85V15h12.025q.425 0 .7.287.275.288.275.713t-.288.712Q21.425 17 21 17h-4v2.15l.9-.9q.275-.275.687-.275.413 0 .713.3t.288.725q-.013.425-.313.725L16.7 22.3q-.15.15-.325.212-.175.063-.375.063ZM15 13V9h-4V7h4q.825 0 1.413.587Q17 8.175 17 9v4Z"/>
    </Icon>
  );
});

IconMaterialTransformFilled.displayName = 'AmauiIconMaterialTransformFilled';

export default IconMaterialTransformFilled;
