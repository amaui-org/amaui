import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolunteerActivism = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolunteerActivism'

      short_name='VolunteerActivism'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 13q-2.35-2.125-4.175-4.062Q10 7 10 5.3q0-1.4.95-2.35Q11.9 2 13.3 2q.8 0 1.5.337.7.338 1.2.913.5-.575 1.2-.913Q17.9 2 18.7 2q1.4 0 2.35.95.95.95.95 2.35 0 1.7-1.825 3.638Q18.35 10.875 16 13Zm0-2.7q1.475-1.4 2.738-2.788Q20 6.125 20 5.3q0-.575-.362-.938Q19.275 4 18.7 4q-.35 0-.662.137-.313.138-.538.413L16 6.35l-1.5-1.8q-.225-.275-.537-.413Q13.65 4 13.3 4q-.575 0-.937.362Q12 4.725 12 5.3q0 .825 1.262 2.212Q14.525 8.9 16 10.3Zm0-3.15ZM14 22.5l-7-1.95V22H1V11h7.95L17 14v2h5v4ZM3 20h2v-7H3Zm10.95.4 5.95-1.85V18h-7.075L9.7 16.95l.6-1.9 2.925.95H15v-.65L8.6 13H7v5.5Z"/>
    </Icon>
  );
});

IconMaterialVolunteerActivism.displayName = 'AmauiIconMaterialVolunteerActivism';

export default IconMaterialVolunteerActivism;
