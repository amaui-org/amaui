import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSynagogueW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SynagogueW100'

      short_name='Synagogue'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.65 20.35V7q0-.975.688-1.663Q3.025 4.65 4 4.65q.975 0 1.663.687.687.688.687 1.663v1.725L12 3.85l5.65 4.875V7q0-.975.688-1.663.687-.687 1.662-.687.975 0 1.663.687.687.688.687 1.663v13.35h-8.7v-6h-3.3v6Zm16.7-11.7h3.3V7q0-.675-.487-1.163Q20.675 5.35 20 5.35t-1.162.487Q18.35 6.325 18.35 7Zm-16 0h3.3V7q0-.675-.488-1.163Q4.675 5.35 4 5.35q-.675 0-1.162.487Q2.35 6.325 2.35 7Zm0 11h3.3V9.35h-3.3Zm4 0h3.3v-6h4.7v6h3.3v-10L12 4.775 6.35 9.65Zm12 0h3.3V9.35h-3.3ZM12 11q-.425 0-.712-.288Q11 10.425 11 10t.288-.713Q11.575 9 12 9t.713.287Q13 9.575 13 10t-.287.712Q12.425 11 12 11Z"/>
    </Icon>
  );
});

IconMaterialSynagogueW100.displayName = 'AmauiIconMaterialSynagogueW100';

export default IconMaterialSynagogueW100;
