import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPolicySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolicySharpFilled'
      short_name='Policy'

      {...props}
    >
      <path d="M12 22Q8.525 21.125 6.263 18.012Q4 14.9 4 11.1V5L12 2L20 5V11.1Q20 12.675 19.587 14.162Q19.175 15.65 18.4 17L15.45 14.05Q15.725 13.575 15.863 13.062Q16 12.55 16 12Q16 10.35 14.825 9.175Q13.65 8 12 8Q10.35 8 9.175 9.175Q8 10.35 8 12Q8 13.65 9.175 14.825Q10.35 16 12 16Q12.525 16 13.038 15.863Q13.55 15.725 14 15.45L17.225 18.65Q16.175 19.875 14.863 20.75Q13.55 21.625 12 22ZM12 14Q11.175 14 10.588 13.412Q10 12.825 10 12Q10 11.175 10.588 10.587Q11.175 10 12 10Q12.825 10 13.413 10.587Q14 11.175 14 12Q14 12.825 13.413 13.412Q12.825 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialPolicySharpFilled.displayName = 'AmauiIconMaterialPolicySharpFilled';

export default IconMaterialPolicySharpFilled;
