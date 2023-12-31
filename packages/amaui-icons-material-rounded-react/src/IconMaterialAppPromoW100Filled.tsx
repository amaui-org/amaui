import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAppPromoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppPromoW100Filled'

      short_name='AppPromo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-450v-180q0-6 4-10t10-4q6 0 10 4t4 10v180l80-80q4-4 9.5-4.5T594-530q5 5 5 10t-5 10l-93 93q-9 9-21 9t-21-9l-93-93q-4-4-4.5-9.5T366-530q5-5 10-5t10 5l80 80ZM312-92q-26 0-43-17t-17-43v-656q0-26 17-43t43-17h336q26 0 43 17t17 43v656q0 26-17 43t-43 17H312Zm-32-200h400v-454H280v454Zm146 114h108q6 0 10-4t4-10q0-6-4-10t-10-4H426q-6 0-10 4t-4 10q0 6 4 10t10 4Z"/>
    </Icon>
  );
});

IconMaterialAppPromoW100Filled.displayName = 'AmauiIconMaterialAppPromoW100Filled';

export default IconMaterialAppPromoW100Filled;
