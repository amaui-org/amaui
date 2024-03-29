import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuestionExchangeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuestionExchangeFilled'

      short_name='QuestionExchange'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 1016q-112 0-206-51T120 829v107H40V696h240v80h-99q48 72 126.5 116T480 936q75 0 140.5-28.5t114-77q48.5-48.5 77-114T840 576h80q0 91-34.5 171T791 887q-60 60-140 94.5T480 1016ZM40 576q0-91 34.5-171T169 265q60-60 140-94.5T480 136q112 0 206 51t154 136V216h80v240H680v-80h99q-48-72-126.5-116T480 216q-75 0-140.5 28.5t-114 77q-48.5 48.5-77 114T120 576H40Zm440 240q21 0 35.5-14.5T530 766q0-21-14.5-36T480 715q-21 0-35.5 14.5T430 765q0 21 14.5 36t35.5 15Zm-36-152h73q0-36 8.5-54t34.5-44q35-35 46.5-56.5T618 458q0-56-40-89t-98-33q-50 0-86 26t-52 74l66 28q7-26 26.5-43t45.5-17q27 0 45.5 15.5T544 461q0 17-8 34t-34 40q-33 29-45.5 56.5T444 664Z"/>
    </Icon>
  );
});

IconMaterialQuestionExchangeFilled.displayName = 'AmauiIconMaterialQuestionExchangeFilled';

export default IconMaterialQuestionExchangeFilled;
