import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuickReferenceAllFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickReferenceAllFilled'

      short_name='QuickReferenceAll'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M660 856q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm204 160L756 909q-21 13-45.5 20t-50.5 7q-75 0-127.5-52.5T480 756q0-75 52.5-127.5T660 576q75 0 127.5 52.5T840 756q0 27-7.5 51.5T812 853l108 107-56 56Zm-744-40V176h400l240 240v100q-24-10-49-15t-51-5q-56 0-104.5 21T472 576H280v80h140q-8 19-12.5 39t-6.5 41H280v80h127q11 50 40 91.5t74 68.5H120Zm360-520h200L480 256l200 200-200-200v200Z"/>
    </Icon>
  );
});

IconMaterialQuickReferenceAllFilled.displayName = 'AmauiIconMaterialQuickReferenceAllFilled';

export default IconMaterialQuickReferenceAllFilled;
