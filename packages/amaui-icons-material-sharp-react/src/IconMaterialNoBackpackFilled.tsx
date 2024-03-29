import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoBackpackFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoBackpackFilled'

      short_name='NoBackpack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.5 13.675 3.5 3.5V8q0-1.4-.85-2.45Q18.3 4.5 17 4.15V2h-3v2h-4V2H7v2.15h-.025l7.85 7.85H16.5Zm3.275 8.925-3.2-3.2h2.8l.625.625V22H4V8q0-.825.312-1.55.313-.725.863-1.275l.975.975v2.825L1.4 4.225 2.8 2.8l18.375 18.4ZM7.5 14h3.675l-2-2H7.5Z"/>
    </Icon>
  );
});

IconMaterialNoBackpackFilled.displayName = 'AmauiIconMaterialNoBackpackFilled';

export default IconMaterialNoBackpackFilled;
