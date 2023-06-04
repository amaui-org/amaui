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
      <path d="M200 256v257-1 384-640 148-148Zm120 374h131q5-8 10-14.5t10-13.5H320q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4Zm0 160h98q-1.25-7-1.625-14T416 762h-96q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4Zm-88.178 134Q206 924 189 907q-17-17-17-43V288q0-26 17-43t43-17h289q12.444 0 23.722 5T564 246l126 126q8 8 13 19.278 5 11.278 5 23.722v102q-7-2-14-2.5t-14-1.5V404H561.582Q549 404 540.5 395.49T532 374.4V256H232q-12 0-22 10t-10 22v576q0 12 10 22t22 10h228q4.857 7.754 10.929 14.377Q477 917 483 924H231.822Zm428.375-52Q709 872 742.5 838.303t33.5-82.5Q776 707 742.303 673.5t-82.5-33.5Q611 640 577.5 673.697t-33.5 82.5Q544 805 577.697 838.5t82.5 33.5Zm213.874 98q-3.928 4-10 4Q858 974 854 970L752 867q-19 16-42.5 24.5T660 900q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 26-8.5 49.5T771 848l103 102q4 3.911 4 9.956Q878 966 874.071 970Z"/>
    </Icon>
  );
});

IconMaterialQuickReferenceAllW100.displayName = 'AmauiIconMaterialQuickReferenceAllW100';

export default IconMaterialQuickReferenceAllW100;
