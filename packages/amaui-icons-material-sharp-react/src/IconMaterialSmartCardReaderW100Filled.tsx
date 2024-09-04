import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartCardReaderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartCardReaderW100Filled'

      short_name='SmartCardReader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-116h696v116H132Zm111-196v-500h474v500H243Zm88-101h22q32 0 49.5-32.5T420-554q0-60-17.5-93T353-680h-22v251Zm222.97-74Q575-503 590-517.97q15-14.98 15-36Q605-575 590.03-590q-14.98-15-36-15Q533-605 518-590.03q-15 14.98-15 36Q503-533 517.97-518q14.98 15 36 15Z"/>
    </Icon>
  );
});

IconMaterialSmartCardReaderW100Filled.displayName = 'AmauiIconMaterialSmartCardReaderW100Filled';

export default IconMaterialSmartCardReaderW100Filled;
