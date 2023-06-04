import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCognitionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CognitionW100'

      short_name='Cognition'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M489 672q51 0 88.5-33t37.5-81q0-40-25-68.5T527 461q-31 0-54 20.5T450 531q0 13 5.5 25t15.5 23l23-19q-8-6-12-13t-4-15q0-15 12.5-28.5T527 490q24 0 42 18.5t18 50.5q0 34-27 59.5T490 644q-48 0-83-38t-35-96q0-29 11.5-56t33.5-49l-21-20q-25 25-39 57t-14 67q0 67 42 115t104 48ZM292 924V780q-57-52-88.5-115.5T172 535q0-128 90-217.5T480 228q103 0 187.5 63.5T777 455l47 189H708v200H548v80h-28V816h160V616h108l-38-155q-23-92-99-148.5T480 256q-116 0-198 81.5T200 535q0 60 24.5 113.5T294 744l26 24v156h-28Zm202-334Z"/>
    </Icon>
  );
});

IconMaterialCognitionW100.displayName = 'AmauiIconMaterialCognitionW100';

export default IconMaterialCognitionW100;
