import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartCardReaderW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartCardReaderW100'

      short_name='SmartCardReader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-162v-26q0-24.75 17.63-42.38Q167.25-248 192-248h576q24.75 0 42.38 17.62Q828-212.75 828-188v26q0 12.75-8.62 21.37Q810.75-132 798-132H162q-12.75 0-21.37-8.63Q132-149.25 132-162Zm28 2h640v-28q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v28Zm83-182v-426q0-26 17-43t43-17h354q26 0 43 17t17 43v426q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-426q0-14-9-23t-23-9H303q-14 0-23 9t-9 23v426q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Zm177-212.16q0-23.84-3.67-47.91Q412.67-626.14 402-647q-8.29-13.81-20.71-23.41-12.43-9.59-28.25-9.59-9.04 0-15.54 6.68-6.5 6.67-6.5 16.32v204.61q0 10.39 6.63 16.89t16.77 6.5q15.6 0 27.51-9.59 11.9-9.6 20.09-23.41 10.67-20.66 14.33-44.49 3.67-23.84 3.67-47.67ZM553.97-503Q575-503 590-517.97q15-14.98 15-36Q605-575 590.03-590q-14.98-15-36-15Q533-605 518-590.03q-15 14.98-15 36Q503-533 517.97-518q14.98 15 36 15ZM480-160Zm0-404Z"/>
    </Icon>
  );
});

IconMaterialSmartCardReaderW100.displayName = 'AmauiIconMaterialSmartCardReaderW100';

export default IconMaterialSmartCardReaderW100;
