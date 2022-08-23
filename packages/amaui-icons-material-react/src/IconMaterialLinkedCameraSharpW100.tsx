import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLinkedCameraSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkedCameraSharpW100'
      short_name='LinkedCamera'

      {...props}
    >
      <path d="M2.825 19.7V6.3H7.225L9.075 4.3H14.875V7H3.525V19H19.525V7.65H20.225V19.7ZM20.475 6.65Q20.475 4.725 19.138 3.387Q17.8 2.05 15.875 2.05V1.35Q18.075 1.35 19.625 2.9Q21.175 4.45 21.175 6.65ZM17.825 6.65Q17.825 5.85 17.25 5.275Q16.675 4.7 15.875 4.7V4Q17 4 17.763 4.762Q18.525 5.525 18.525 6.65ZM11.525 13Q11.525 13 11.525 13Q11.525 13 11.525 13ZM11.525 16.5Q13 16.5 14.012 15.488Q15.025 14.475 15.025 13Q15.025 11.525 14.012 10.512Q13 9.5 11.525 9.5Q10.05 9.5 9.038 10.512Q8.025 11.525 8.025 13Q8.025 14.475 9.038 15.488Q10.05 16.5 11.525 16.5Z"/>
    </Icon>
  );
});

IconMaterialLinkedCameraSharpW100.displayName = 'AmauiIconMaterialLinkedCameraSharpW100';

export default IconMaterialLinkedCameraSharpW100;
