import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAttachmentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachmentFilled'

      short_name='Attachment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.5 17.5H18V16H7.5q-1.65 0-2.825-1.175Q3.5 13.65 3.5 12q0-1.65 1.175-2.825Q5.85 8 7.5 8H18q1.05 0 1.775.725.725.725.725 1.775 0 1.05-.725 1.775Q19.05 13 18 13H8.5q-.425 0-.712-.288Q7.5 12.425 7.5 12t.288-.713Q8.075 11 8.5 11H18V9.5H8.5q-1.05 0-1.775.725Q6 10.95 6 12q0 1.05.725 1.775.725.725 1.775.725H18q1.65 0 2.825-1.175Q22 12.15 22 10.5q0-1.65-1.175-2.825Q19.65 6.5 18 6.5H7.5q-2.3 0-3.9 1.6T2 12q0 2.3 1.6 3.9t3.9 1.6Z"/>
    </Icon>
  );
});

IconMaterialAttachmentFilled.displayName = 'AmauiIconMaterialAttachmentFilled';

export default IconMaterialAttachmentFilled;
