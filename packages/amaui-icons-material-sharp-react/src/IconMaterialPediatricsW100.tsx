import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPediatricsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PediatricsW100'

      short_name='Pediatrics'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M326 406v-28h140V268h28v110h140v28H326Zm6 496V536q0-37.5 26.25-63.75T422 446h116q37.5 0 63.75 26.25T628 536v366H332Zm28-28h240V536q0-26.35-17.825-44.175Q564.35 474 538 474H422q-26.35 0-44.175 17.825Q360 509.65 360 536v53h94v28h-94v114h94v28h-94v115Zm0 0V474v400Z"/>
    </Icon>
  );
});

IconMaterialPediatricsW100.displayName = 'AmauiIconMaterialPediatricsW100';

export default IconMaterialPediatricsW100;
