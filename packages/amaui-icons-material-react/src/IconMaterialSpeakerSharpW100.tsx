import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpeakerSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerSharpW100'
      short_name='Speaker'

      {...props}
    >
      <path d="M6.3 20.7V3.3H17.7V20.7ZM7 20H17V4H7ZM12 8.5Q12.625 8.5 13.062 8.062Q13.5 7.625 13.5 7Q13.5 6.375 13.062 5.938Q12.625 5.5 12 5.5Q11.375 5.5 10.938 5.938Q10.5 6.375 10.5 7Q10.5 7.625 10.938 8.062Q11.375 8.5 12 8.5ZM12 18.3Q13.375 18.3 14.338 17.337Q15.3 16.375 15.3 15Q15.3 13.625 14.338 12.662Q13.375 11.7 12 11.7Q10.625 11.7 9.663 12.662Q8.7 13.625 8.7 15Q8.7 16.375 9.663 17.337Q10.625 18.3 12 18.3ZM12 17.6Q10.925 17.6 10.163 16.837Q9.4 16.075 9.4 15Q9.4 13.925 10.163 13.162Q10.925 12.4 12 12.4Q13.075 12.4 13.838 13.162Q14.6 13.925 14.6 15Q14.6 16.075 13.838 16.837Q13.075 17.6 12 17.6ZM7 20V4V20Z"/>
    </Icon>
  );
});

IconMaterialSpeakerSharpW100.displayName = 'AmauiIconMaterialSpeakerSharpW100';

export default IconMaterialSpeakerSharpW100;
