import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPreviewRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PreviewRoundedFilled'
      short_name='Preview'

      {...props}
    >
      <path d="M12 15.5Q13.4 15.5 14.55 14.837Q15.7 14.175 16.35 13Q15.7 11.825 14.55 11.162Q13.4 10.5 12 10.5Q10.6 10.5 9.45 11.162Q8.3 11.825 7.65 13Q8.3 14.175 9.45 14.837Q10.6 15.5 12 15.5ZM12 17Q9.95 17 8.338 15.887Q6.725 14.775 6 13Q6.725 11.225 8.338 10.113Q9.95 9 12 9Q14.05 9 15.663 10.113Q17.275 11.225 18 13Q17.275 14.775 15.663 15.887Q14.05 17 12 17ZM12 14.5Q11.375 14.5 10.938 14.062Q10.5 13.625 10.5 13Q10.5 12.375 10.938 11.938Q11.375 11.5 12 11.5Q12.625 11.5 13.062 11.938Q13.5 12.375 13.5 13Q13.5 13.625 13.062 14.062Q12.625 14.5 12 14.5ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V7H5V19Q5 19 5 19Q5 19 5 19Z"/>
    </Icon>
  );
});

IconMaterialPreviewRoundedFilled.displayName = 'AmauiIconMaterialPreviewRoundedFilled';

export default IconMaterialPreviewRoundedFilled;
