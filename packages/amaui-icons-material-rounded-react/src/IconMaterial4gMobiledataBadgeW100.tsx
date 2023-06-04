import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial4gMobiledataBadgeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4gMobiledataBadgeW100'

      short_name='4gMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M152 884q-26 0-43-17t-17-43V328q0-26 17-43t43-17h656q26 0 43 17t17 43v496q0 26-17 43t-43 17H152Zm0-28h656q12 0 22-10t10-22V328q0-12-10-22t-22-10H152q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32 0V296v560Zm624-294h-54q-6 0-10 4t-4 10q0 6 4 10t10 4h26v100q0 14-9 23t-23 9H576q-14 0-23-9t-9-23V462q0-14 9-23t23-9h168q-8-14-22-21t-30-7H576q-25 0-42.5 17.5T516 462v228q0 25 17.5 42.5T576 750h108q25 0 42.5-17.5T744 690V562Zm-398 68v106q0 6 4 10t10 4q6 0 10-4t4-10V630h66q6 0 10-4t4-10q0-6-4-10t-10-4h-66V416q0-6-4-10t-10-4q-6 0-10 4t-4 10v186H214V416q0-6-4-10t-10-4q-6 0-10 4t-4 10v184q0 13 8.5 21.5T216 630h130Z"/>
    </Icon>
  );
});

IconMaterial4gMobiledataBadgeW100.displayName = 'AmauiIconMaterial4gMobiledataBadgeW100';

export default IconMaterial4gMobiledataBadgeW100;
