// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {t} from 'utils/i18n';
import saml from 'images/feature-discovery/saml.png';

import FeatureDiscovery from '../index';

const CustomTermsOfServiceFeatureDiscovery: React.FC = () => {
    return (
        <FeatureDiscovery
            featureName='custom_terms_of_service'
            titleID='admin.custom_terms_of_service_feature_discovery.title'
            titleDefault='Create custom terms of service with Mattermost Enterprise E20'
            copyID='admin.custom_terms_of_service_feature_discovery.copy'
            copyDefault={'Create your own terms of service that new users must accept before accessing your Mattermost instance on desktop, web, or mobile.'}
            learnMoreURL='https://docs.mattermost.com/cloud/cloud-administration/custom-terms-of-service.html'
            imgPath={saml}
        />
    );
};

t('admin.custom_terms_of_service_feature_discovery.title');
t('admin.custom_terms_of_service_feature_discovery.copy');

export default CustomTermsOfServiceFeatureDiscovery;