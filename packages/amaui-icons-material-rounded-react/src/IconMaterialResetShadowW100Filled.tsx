import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetShadowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetShadowW100Filled'

      short_name='ResetShadow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M654.15-132Q582-132 531-182.85t-51-123Q480-378 530.85-429t123-51Q726-480 777-429.15t51 123Q828-234 777.15-183t-123 51ZM653-161q-23-31-36.5-67T603-306q0-42 13.41-78.28Q629.83-420.56 653-452q-60.42 0-102.71 43Q508-366 508-306t42.29 102.5Q592.58-161 653-161ZM480-760q-117 0-198.5 81.5T200-480q0 88 48 157.5T372-221v-125q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v144q0 12.75-8.62 21.37Q382.75-172 370-172H226q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h130q-81-37-132.5-111.5T172-480q0-64.08 24-120.04Q220-656 262-698q42-42 98-66t120.43-24q97.08 0 174.82 55.5Q733-677 767-590q2 5 .09 10.36-1.91 5.35-7 7.5-5.09 2.14-10.59-.36T742-580q-30-79-100.72-129.5T480-760Z"/>
    </Icon>
  );
});

IconMaterialResetShadowW100Filled.displayName = 'AmauiIconMaterialResetShadowW100Filled';

export default IconMaterialResetShadowW100Filled;
