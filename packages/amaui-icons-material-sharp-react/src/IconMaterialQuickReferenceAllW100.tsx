import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuickReferenceAllW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickReferenceAllW100'

      short_name='QuickReferenceAll'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 256v257-1 384-640 148-148Zm106 374h145q5-8 10-14.5t10-13.5H306v28Zm0 160h112q-1.25-7-1.625-14T416 762H306v28ZM172 924V228h374l162 162v127q-7-2-14-2.5t-14-1.5V404H532V256H200v640h260q4.857 7.754 10.929 14.377Q477 917 483 924H172Zm488.197-52Q709 872 742.5 838.303t33.5-82.5Q776 707 742.303 673.5t-82.5-33.5Q611 640 577.5 673.697t-33.5 82.5Q544 805 577.697 838.5t82.5 33.5ZM864 979 752 867q-19 16-42.5 24.5T660 900q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 26-8.5 49.5T771 848l112 112-19 19Z"/>
    </Icon>
  );
});

IconMaterialQuickReferenceAllW100.displayName = 'AmauiIconMaterialQuickReferenceAllW100';

export default IconMaterialQuickReferenceAllW100;
