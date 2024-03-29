import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAttachFileAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachFileAddFilled'

      short_name='AttachFileAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.5 22q-2.3 0-3.9-1.6T6 16.5V6q0-1.65 1.175-2.825Q8.35 2 10 2q1.65 0 2.825 1.175Q14 4.35 14 6v8h-1.5V6q0-1.05-.725-1.775Q11.05 3.5 10 3.5q-1.05 0-1.775.725Q7.5 4.95 7.5 6v10.5q0 1.65 1.175 2.825Q9.85 20.5 11.5 20.5q.725 0 1.363-.238.637-.237 1.137-.662v1.8q-.575.275-1.2.437-.625.163-1.3.163Zm4.5-1v-3h-3v-2h3v-3h2v3h3v2h-3v3Zm-4.5-4.5V18q-1.05 0-1.775-.725Q9 16.55 9 15.5V6h1.5v9.5q0 .425.288.712.287.288.712.288Zm4-5.5V6H17v5Z"/>
    </Icon>
  );
});

IconMaterialAttachFileAddFilled.displayName = 'AmauiIconMaterialAttachFileAddFilled';

export default IconMaterialAttachFileAddFilled;
