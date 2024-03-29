import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFitnessCenterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitnessCenterFilled'

      short_name='FitnessCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.7 21.2q-.275-.275-.275-.7 0-.425.275-.7l2.85-2.85-8.5-8.5L4.2 11.3q-.3.3-.7.287-.4-.012-.7-.312-.3-.3-.3-.713 0-.412.3-.712l.7-.7-.7-.7q-.3-.3-.3-.7 0-.4.3-.7l1.425-1.425L3.5 4.9q-.3-.3-.287-.713.012-.412.312-.712t.713-.3q.412 0 .712.3l.7.725 1.4-1.4q.3-.3.7-.3.4 0 .7.3l.725.725L9.9 2.8q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7L8.45 7.05l8.5 8.5 2.85-2.85q.3-.3.713-.3.412 0 .712.3t.3.712q0 .413-.3.713l-.725.725.7.7q.3.3.3.7 0 .4-.3.7l-1.425 1.425.725.725q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3l-.725-.7-1.4 1.4q-.3.3-.7.3-.4 0-.7-.3l-.725-.725-.725.725q-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialFitnessCenterFilled.displayName = 'AmauiIconMaterialFitnessCenterFilled';

export default IconMaterialFitnessCenterFilled;
