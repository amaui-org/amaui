import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPreviewSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PreviewSharp'
      short_name='Preview'

      {...props}
    >
      <path d="M12 15.5Q13.4 15.5 14.55 14.837Q15.7 14.175 16.35 13Q15.7 11.825 14.55 11.162Q13.4 10.5 12 10.5Q10.6 10.5 9.45 11.162Q8.3 11.825 7.65 13Q8.3 14.175 9.45 14.837Q10.6 15.5 12 15.5ZM12 17Q9.95 17 8.338 15.887Q6.725 14.775 6 13Q6.725 11.225 8.338 10.113Q9.95 9 12 9Q14.05 9 15.663 10.113Q17.275 11.225 18 13Q17.275 14.775 15.663 15.887Q14.05 17 12 17ZM12 14.5Q11.375 14.5 10.938 14.062Q10.5 13.625 10.5 13Q10.5 12.375 10.938 11.938Q11.375 11.5 12 11.5Q12.625 11.5 13.062 11.938Q13.5 12.375 13.5 13Q13.5 13.625 13.062 14.062Q12.625 14.5 12 14.5ZM3 21V3H21V21ZM5 19H19V7H5Z"/>
    </Icon>
  );
});

IconMaterialPreviewSharp.displayName = 'AmauiIconMaterialPreviewSharp';

export default IconMaterialPreviewSharp;
