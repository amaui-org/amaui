import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoStoriesSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoStoriesSharp'
      short_name='AutoStories'

      {...props}
    >
      <path d="M12 20Q10.8 19.05 9.4 18.525Q8 18 6.5 18Q5.15 18 3.775 18.425Q2.4 18.85 1 19.675V5.55Q2.125 4.75 3.663 4.375Q5.2 4 6.5 4Q7.95 4 9.338 4.375Q10.725 4.75 12 5.5V17.6Q13.275 16.8 14.675 16.4Q16.075 16 17.5 16Q18.4 16 19.263 16.15Q20.125 16.3 21 16.6V4.6Q21.375 4.725 22 5Q22.625 5.275 23 5.55V19.675Q21.6 18.85 20.225 18.425Q18.85 18 17.5 18Q16 18 14.6 18.525Q13.2 19.05 12 20ZM14 15V5.5L19 0.5V10.5ZM10 16.625V6.725Q9.175 6.375 8.288 6.188Q7.4 6 6.5 6Q5.575 6 4.7 6.175Q3.825 6.35 3 6.7V16.625Q3.875 16.3 4.738 16.15Q5.6 16 6.5 16Q7.4 16 8.262 16.15Q9.125 16.3 10 16.625ZM10 16.625Q10 16.625 10 16.625Q10 16.625 10 16.625Q10 16.625 10 16.625Q10 16.625 10 16.625V6.725Q10 6.725 10 6.725Q10 6.725 10 6.725Q10 6.725 10 6.725Q10 6.725 10 6.725Z"/>
    </Icon>
  );
});

IconMaterialAutoStoriesSharp.displayName = 'AmauiIconMaterialAutoStoriesSharp';

export default IconMaterialAutoStoriesSharp;
