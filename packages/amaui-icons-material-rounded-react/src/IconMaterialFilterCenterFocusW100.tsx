import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterCenterFocusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterCenterFocusW100'

      short_name='FilterCenterFocus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13.7q-.725 0-1.212-.488Q10.3 12.725 10.3 12t.488-1.213Q11.275 10.3 12 10.3t1.213.487q.487.488.487 1.213 0 .725-.487 1.212-.488.488-1.213.488ZM4.65 9q-.15 0-.25-.1t-.1-.25V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h2.85q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H5.8q-.35 0-.575.225Q5 5.45 5 5.8v2.85q0 .15-.1.25t-.25.1ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2v-2.85q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.85q0 .35.225.575Q5.45 19 5.8 19h2.85q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm9.55 0q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.85q.35 0 .575-.225Q19 18.55 19 18.2v-2.85q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.85q0 .65-.425 1.075-.425.425-1.075.425Zm4-10.7q-.15 0-.25-.1t-.1-.25V5.8q0-.35-.225-.575Q18.55 5 18.2 5h-2.85q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.85q.65 0 1.075.425.425.425.425 1.075v2.85q0 .15-.1.25t-.25.1ZM12 13q.425 0 .713-.288Q13 12.425 13 12t-.287-.713Q12.425 11 12 11t-.712.287Q11 11.575 11 12t.288.712Q11.575 13 12 13Z"/>
    </Icon>
  );
});

IconMaterialFilterCenterFocusW100.displayName = 'AmauiIconMaterialFilterCenterFocusW100';

export default IconMaterialFilterCenterFocusW100;
