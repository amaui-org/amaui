import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStepsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StepsFilled'

      short_name='Steps'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M820 976 296 476H76l232-311 132 66v131l147-35 88 267 205 205-30 177h-30Zm-315 0L43 556h222l438 420H505Z"/>
    </Icon>
  );
});

IconMaterialStepsFilled.displayName = 'AmauiIconMaterialStepsFilled';

export default IconMaterialStepsFilled;
