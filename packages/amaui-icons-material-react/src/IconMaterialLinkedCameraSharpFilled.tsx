import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLinkedCameraSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkedCameraSharpFilled'
      short_name='LinkedCamera'

      {...props}
    >
      <path d="M20.65 7Q20.65 5.05 19.3 3.7Q17.95 2.35 16 2.35V1Q18.5 1 20.25 2.75Q22 4.5 22 7ZM2 21V5H7.15L9 3H15V6Q15.825 6 16.413 6.588Q17 7.175 17 8H22V21ZM18 7Q18 6.175 17.413 5.588Q16.825 5 16 5V3.65Q17.375 3.65 18.337 4.625Q19.3 5.6 19.35 7ZM12 17.5Q13.875 17.5 15.188 16.188Q16.5 14.875 16.5 13Q16.5 11.125 15.188 9.812Q13.875 8.5 12 8.5Q10.125 8.5 8.812 9.812Q7.5 11.125 7.5 13Q7.5 14.875 8.812 16.188Q10.125 17.5 12 17.5Z"/>
    </Icon>
  );
});

IconMaterialLinkedCameraSharpFilled.displayName = 'AmauiIconMaterialLinkedCameraSharpFilled';

export default IconMaterialLinkedCameraSharpFilled;
